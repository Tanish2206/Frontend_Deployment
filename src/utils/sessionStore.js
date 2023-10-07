import { EncryptStorage } from "encrypt-storage";

export const StoreCookie= new EncryptStorage("DAJIMINKeyHAS", {
  prefix: "@dajiUser",
  storageType: "localStorage",
});
