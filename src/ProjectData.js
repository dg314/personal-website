class ProjectData {
    constructor(name, date, technologies, description, externalLink, externalLinkName) {
        this.name = name // string
        this.date = date // string
        this.technologies = technologies // Technology[]
        this.description = description // string
        this.externalLink = externalLink // string
        this.externalLinkName = externalLinkName // string
    }

    getIconPath() {
        return `projects/${this.name.replaceAll(" ", "_").replaceAll("\u00A0", "_").toLowerCase()}.svg`
    }
}

export default ProjectData