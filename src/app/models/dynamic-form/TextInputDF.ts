import { ItemBaseDF } from "./ItemBaseDF";

export class TextInputDF extends ItemBaseDF<string> {
    override controlType = 'textbox';
}