import { expect, Locator, Page } from '@playwright/test';

type FormDataType = {
    
};

export abstract class AbstractQuestionJourneyPage<T extends FormDataType> {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    abstract verifyRendered(): Promise<void> 
    
    abstract fill(data: T): Promise<void> 

    abstract formValidated(): Promise<void> 

    abstract back(): Promise<void> 

    abstract next(): Promise<void> 
    
}