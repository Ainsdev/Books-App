interface AddToDataBase {
    categorie: string
    personal: boolean
    name: string
    author: string
    date: string
    description: string
    valoration: number
    links?: Array<string>
    //Date of creation and USER
}
export default AddToDataBase