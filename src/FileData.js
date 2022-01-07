class FileData {
    constructor(name, extension, externalLink, windowContent, initPosition) {
        this.name = name // string
        this.extension = extension // string
        this.externalLink = externalLink // string
        this.windowContent = windowContent // JSX
        this.initPosition = initPosition // null iff window is not open; { width: number, height: number, x: number, y: number }
        this.open = !!this.initPosition && !!this.windowContent // boolean

        if (this.initPosition === null) {
            this.initPosition = {
                width: 0.4,
                height: 0.4,
                x: 0.3,
                y: 0.3
            }
        }
    }

    openFile(initPosition) {
        if (this.windowContent !== null) {
            this.initPosition = initPosition
            this.open = true
        }
    }

    closeFile() {
        this.open = false
    }

    getFullName() {
        return `${this.name}${this.extension}`
    }

    getIconPath() {
        if (this.extension === ".txt") {
            return "icons/txt.svg"
        }
        else {
            return `icons/${this.name}.svg`
        }
    }

    getPixelInitPosition(size) {
        const width = size[0] * this.initPosition.width
        const height = (size[1] - 32) * this.initPosition.height
        const adjustedWidth = Math.max(width, 250)
        const adjustedHeight = Math.max(height, 250)

        return {
            width: adjustedWidth,
            height: adjustedHeight,
            x: size[0] * this.initPosition.x + (width - adjustedWidth) / 2 - 8,
            y: (size[1] - 32) * this.initPosition.y + (height - adjustedHeight) / 2 - 8
        }
    }
}

export default FileData