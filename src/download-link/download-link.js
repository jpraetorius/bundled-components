import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

export class DownloadLinkController extends Controller {
    static targets = ["dialog"];

    connect() {
        this.dialogTarget.classList.toggle('hidden');
    }

    showDialog() {
        this.dialogTarget.classList.toggle('hidden');
    }
}