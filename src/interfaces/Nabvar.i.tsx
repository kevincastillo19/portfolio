export interface NavbarInterface {
    image:string,
    options:NavItem[]
}

type NavItem = {
    id?:string | number
    name:string
    action?:void
    url:string
}