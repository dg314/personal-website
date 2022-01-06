class FileData {
    constructor(name, extension, externalLink, windowContent) {
        this.name = name
        this.extension = extension
        this.externalLink = externalLink
        this.windowContent = windowContent
        this.open = false
    }

    openFile() {
        if (this.externalLink) {
            window.open(this.externalLink, "_blank")
        }
        else {
            this.open = true
        }
    }

    closeFile() {
        this.open = false
    }

    isWindowShown() {
        return this.open && !!this.windowContent
    }

    getFullName() {
        return `${this.name}${this.extension}`
    }
}

export default FileData