class notesPage {
    clickAddNotes = '//button[@data-testid="add-new-note"]';
    selectDropDown = '//select[@id="category"]';
    titleInput = '//input[@id="title"]';
    desciptionInput = '//textarea[@id="description"]';
    createButton = '//button[@type="submit" and text()="Create"]';
    selectnotes = '(//button[@data-testid="note-edit"])[1]';
    updateButton = '//button[@data-testid="note-submit"]';
    deleteButton = '(//button[@data-testid="note-delete"])[1]';
    deleteConfiramtion = '//button[@class="btn btn-danger"]';
    noNotesMessage = '//h4[@data-testid="no-notes-message"]';

    addnotes() {
        cy.xpath(this.clickAddNotes).click();
    }
    dropDown() {
        cy.xpath(this.selectDropDown).select('Home');
    }

    fillTitle(title) {
        cy.xpath(this.titleInput).type(title);
    }
    filldescription(Description) {
        cy.xpath(this.desciptionInput).type(Description);
    }
    createBtn() {
        cy.xpath(this.createButton).click();
    }

    //edits nogtes

    selectnotesbtn() {
        cy.xpath(this.selectnotes).click();
    }

    dropDown2() {
        cy.xpath(this.selectDropDown).select('Work');
    }

    updatetitle(updateTitle) {
        cy.xpath(this.titleInput).clear().type(updateTitle);
    }

    updatenotes(updatedesc) {
        cy.xpath(this.desciptionInput).clear().type(updatedesc);
    }

    updateBtn() {
        cy.xpath(this.updateButton).click();
    }

    //delete notes
    deleteBtn() {
        cy.xpath(this.deleteButton).click();
    }

    deletenote() {
        cy.xpath(this.deleteConfiramtion).click();
    }

    verifyNoNotesMessage() {
        cy.xpath(this.noNotesMessage).should('be.visible');
    }
}

export default notesPage;