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
