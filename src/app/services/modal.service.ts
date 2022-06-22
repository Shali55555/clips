import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }
  
  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
    // console.log(this.modals)
  }

  unregister(id: string) {
    this.modals = this.modals.filter(
      element => element.id !== id
    )
  }

  isModalOpen(id: string) : boolean {
    // return Boolean(this.modals.find(element => element.id === id)?.visible) //(this or the next line works)
    return !!this.modals.find(element => element.id === id)?.visible
    // comparing the element id property to the id passed in the function
    // if it finds a modal, it will return the first object it found, otherwise it returns undefined
    // '?' optional chaining: if the find function does not find an element, the code stops at the ?
    // and will not try to access the property called visible
  }

  toggleModal(id: string) {
    const modal = this.modals.find(element => element.id === id)
    if (modal) {
      modal.visible = !modal.visible
    }
    // this.visible = !this.visible
  }

}






