import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { CartContext } from '../../context/CartContext';
import { removeToken, token } from '../../helpers/Auth';
import { HiShoppingCart } from 'react-icons/hi';

const MainMenu = () => {
	const { userData, setUserData } = useContext(UserContext);
	const { state } = useContext(CartContext);
	const nav = useNavigate();

	const closeSession = () => {
		setUserData();
		removeToken();
		nav('/');
	};
	return (
		<div className="fixed bg-gradient w-full z-10">
			<div className="w-full lg:max-w-256 m-auto flex items-center">
				<div className="logo flex">
					<Link to="/">
						<img
							src="https://ed.team/images/logo/logo-monocolor.svg"
							alt="Logo EDteam White"
						/>
					</Link>
				</div>
				<nav className="w-full">
					<ul className="flex justify-end text-gray-100">
						<li className="flex items-center">
							<Link className="menu-item" to="/">
								Inicio
							</Link>
						</li>
						<li className="flex items-center">
							<Link className="menu-item" to="/productos">
								Productos
							</Link>
						</li>
						{!token() ? (
							<li className="flex items-center">
								<Link className="menu-item" to="/login">
									Iniciar sesión
								</Link>
							</li>
						) : (
							<>
								<li className="flex items-center">
									<Link className="menu-item" to="/perfil">
										Mi cuenta
									</Link>
								</li>

								<li className="flex items-center">
									<a className="menu-item" onClick={closeSession}>
										Cerrar Sesión
									</a>
								</li>
								{userData?.user?.is_admin && (
									<li className="flex items-center">
										<Link
											className="menu-item  text-orange-200 hover:text-orange-300"
											to="/admin"
										>
											Panel de administración
										</Link>
									</li>
								)}
							</>
						)}
						<li className="flex items-center">
							<Link
								className="menu-item flex items-center text-orange-200"
								to="/carrito"
							>
								<HiShoppingCart className="mr-1 text-lg" />{' '}
								<span>({state?.cart?.length})</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MainMenu;
