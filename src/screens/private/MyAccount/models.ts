import { Errors } from "../../../helpers/hooks/useFormAuth";
import { AuthDTO } from "../../../models/User";

export interface MyAccountViewModel {
  handleSignOut: () => Promise<void>;
  pickImage: () => Promise<void>;
  formData: AuthDTO;
  loading: boolean;
  errors: Errors | null;
  handleFormData: (key: keyof AuthDTO, value: string) => void;
  onSubmit: () => Promise<void>;
  setformData: React.Dispatch<React.SetStateAction<AuthDTO>>;
}
