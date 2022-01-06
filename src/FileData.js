class FileData {
    constructor(name, extension, externalLink, windowContent, initPosition) {
        this.name = name
        this.extension = extension
        this.externalLink = externalLink
        this.windowContent = windowContent
        this.initPosition = initPosition // null iff window is not open, {width: number, height: number, x: number, y: number}
    }

    openFile(initPosition) {
        if (this.externalLink) {
            window.open(this.externalLink, "_blank")
        }
        else {
            this.initPosition = initPosition
        }
    }

    closeFile() {
        this.initPosition = null
    }

    isWindowShown() {
        return !!this.initPosition && !!this.windowContent
    }

    getFullName() {
        return `${this.name}${this.extension}`
    }

    getIconPath() {
        if (this.extension == ".txt") {
            return "icons/txt.svg"
        }
        else {
            return `icons/${this.name}.svg`
        }
    }

    getPixelInitPosition(size) {
        const width = size[0] * this.initPosition.width
        const height = (size[1] - 32) * this.initPosition.height
        const adjustedWidth = Math.max(width, 200)
        const adjustedHeight = Math.max(height, 200)

        return {
            width: adjustedWidth,
            height: adjustedHeight,
            x: size[0] * this.initPosition.x + (width - adjustedWidth) / 2 - 8,
            y: (size[1] - 32) * this.initPosition.y + (height - adjustedHeight) / 2 - 8
        }
    }
}

export default FileData