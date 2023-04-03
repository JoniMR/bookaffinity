export interface UserInterface {
  id_user: number;
  name: string;
  pass: string;
  picture: string;
  email: string;
  status: number;
  id_rol: string;
  createdAt: number;
  updatedAt: number;
  // rol:RolInterface
  // chat:chatInterface[]
}

export interface InvoiceInterface {
  id_invoice: number;
  id_copy: number;
  id_user: number;
}

export interface CopyInterface {
  id_copy: number;
  id_user: number;
  id_book: number;
  visible: number;
  status: string;
  price: number;
}

export interface ImgCopyInterface {
  id_img_copy: number;
  rute: string;
  id_copy: number;
}