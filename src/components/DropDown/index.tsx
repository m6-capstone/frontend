import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/User/UserContext";
import { Container, OptionList } from "./style";

function DropdownMenu({ children }) {
  const { userData, userLogout, isLoggedIn } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      {children}
      {showMenu ? (
        <OptionList>
          <li
            onClick={() =>
              console.log("Adicionar função de editar Perfil de usuario:)")
            }
          >
            Editar Perfil
          </li>
          <li
            onClick={() =>
              console.log("Adicionar Função que abre modal Editar")
            }
          >
            Editar endereço
          </li>
          {userData?.isSeller ? (
            <li onClick={() => navigate("/profileviewadmin")}>Meus Anúncios</li>
          ) : (
            <></>
          )}

          <li onClick={() => userLogout()}>Sair</li>
        </OptionList>
      ) : null}
    </div>
  );
}

export default DropdownMenu;
