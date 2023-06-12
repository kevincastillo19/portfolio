export interface Project {    
    id:number,
    title:string,
    description:string,
    image:string,
    mobile:boolean,
    theme:'white' | 'dark',
    technologies:Array<string>
}