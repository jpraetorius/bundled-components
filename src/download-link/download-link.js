import { Controller } from "stimulus";

export class DownloadLinkController extends Controller {
    static targets = ["dialog"];

    connect() {
        this.dialogTarget.classList.toggle('hidden');
    }

    showDialog() {
        this.dialogTarget.classList.toggle('hidden');
    }
}