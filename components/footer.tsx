import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( <footer className="border-t">
     <div className="p-5 flex-center">
        {APP_NAME} ©  {currentYear} Tüm hakları saklıdır.
     </div>
    </footer>  );
}
 
export default Footer;