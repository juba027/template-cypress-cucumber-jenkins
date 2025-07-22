/// <reference types="cypress" />

class RegisterPage{
        
    elements={
        firstName: ()=> cy.get("#id_first_name"),
        lastName: ()=>cy.get("#id_last_name"),
        email: ()=> cy.get("#id_email"),
        nothingGender: ()=>cy.get("#id_gender_0"),
        maleGender: ()=>cy.get("#id_gender_1"),
        femaleGender: ()=>cy.get("#id_gender_2"),
        otherGender: ()=>cy.get("#id_gender_3"),
        phoneNumber: ()=>cy.get("#id_phone_number"),
        subject: ()=>cy.get("#id_subject"),
        submitButton: ()=>cy.get("button[type='submit']"),
    }
    setFirstName(s){
        this.elements.firstName().clear().type(s)
    }
    setLastName(s){
        this.elements.lastName().clear().type(s)
    }

    setEmail(s){
        this.elements.email().clear().type(s)
    }
    
    selectNothing(){
        this.elements.nothingGender().click()
    }
    selectMale(){
        this.elements.maleGender().click()
    }
    setFemale(){
        this.elements.femaleGender().click()
    }

    setOther(){
        this.elements.otherGender().click()
    }

    setSubject(s){
        this.elements.subject().click.type(s)
    }
    


}