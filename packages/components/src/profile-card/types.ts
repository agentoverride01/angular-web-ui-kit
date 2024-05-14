export type ProfileCardValue = {
  id?: string 
  photo?: {
    src?: string
    alt?: string
  }
  name?: string
  title?: string
  email?: string
  contacts?: {
    office?: string
    mobile?: string
  }
}