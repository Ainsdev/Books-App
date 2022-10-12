interface AddToDataBase {
    type: string
    categorie: string
    personal: boolean
    name: string
    author: string
    image?: string
    date?: string
    readed: boolean
    description?: string
    valoration: number
    links?: Array<string>
    //Date of creation and USER
}
export default AddToDataBase
export interface SearchedBook {
    id?: any
    type: string
    categorie: string
    name: string
    author: string
    image?: string
    date: string
    description: string
    valoration: number
    pages: number
}
export interface PersonalCardProps {
    id?:string
    type: string
    category: string
    title: string
    author: string
    image?: string
    read: boolean
    description?: string
    valoration: number
    links: Array<string>
}

