import notesPage from '../pages/notesPage';

describe('Dashboard Notes Features', () => {

    beforeEach(() => {
        cy.loginWithFixture();
    });
    it('Verify if user can create the notes', () => {
        cy.fixture('notesData').then((data) => {
            const note = new notesPage();
            note.addnotes();
            note.dropDown();
            note.fillTitle(data.title);
            note.filldescription(data.desc);
            note.createBtn();
            cy.contains(data.title).should('be.visible');
            cy.log('Note Created Successfully');
        });
    });

    it('Verify if user can updated the notes', () => {
        cy.fixture('notesData').then((data) => {
            const note = new notesPage();
            note.selectnotesbtn();
            note.dropDown2();
            note.updatetitle(data.updatetitle);
            note.updatenotes(data.updatedesc);
            note.updateBtn();
            cy.log('Note Updated Successfully');
        });
    });


    it('Verify if user can delete the notes', () => {
        const note = new notesPage();
        note.deleteBtn();
        note.deletenote();
        cy.log('Note Deleted Successfully');
    });

});





