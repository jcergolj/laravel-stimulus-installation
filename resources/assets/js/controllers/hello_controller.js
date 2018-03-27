import { Controller } from "stimulus"

export default class extends Controller {
    static get targets() {
        return ["name"]
    }

    greet() {
        const element = this.nameTarget
        const name = element.value
        console.log(`Hello, ${name}!`)
    }
}