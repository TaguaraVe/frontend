import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaUserAlt, FaUserPlus } from 'react-icons/fa';
import Cookies from 'js-cookie';

import logo from '../../../public/assets/images/logos/logo.png';
import { ModalLogin } from '../login/ModalLogin';
import {
  openModalLogin,
  removeUser,
  selectCurrentUser,
} from '@/features/users/userSlice';

const links = [
  { label: 'Inicio', route: '/' },
  { label: 'Vehículos', route: '/booking' },
  { label: 'Servicios', route: '/services' },
  { label: 'Nosotros', route: '/about' },
  { label: 'Contacto', route: '/contact' },
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    dispatch(removeUser());
    Cookies.remove('token');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  const handleLogin = () => {
    dispatch(openModalLogin());
  };
  const handleRegister = () => {
    router.push('/register');
  };
  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <>
      <header>
        <Link href="/">
          <div className="flex items-center">
            <div className="h-9 w-9  md:h-[73px] md:w-[81px] mr-[30px]">
              <Image src={logo} alt="Logo" className="w-full h-full" />
            </div>
            <div className="hidden md:block font-bold text-sm">
              <p>{'Mudarse nunca fue'}</p>
              <p>{'tan fácil"'}</p>
            </div>
          </div>
        </Link>

        <nav className="flex lg:flex-row-reverse justify-between items-center">
          <div>
            {currentUser.firstName !== '' ? (
              <div className="flex space-x-2 ">
                <button
                  className="w-[60px] h-[60px] md:ml-12 bg-primary-200 hover:bg-primary-300 rounded-full flex justify-center items-center text-2xl"
                  onClick={() => handleProfile()}
                >
                  {`${currentUser.firstName[0].toUpperCase()}${currentUser.lastName[0].toUpperCase()}`}
                </button>

                <button className="btn" onClick={() => handleLogout()}>
                  Salir
                </button>
              </div>
            ) : (
              <div className="flex space-x-2 ">
                <button
                  className="hidden md:block btn btnSecond"
                  onClick={() => handleLogin()}
                >
                  Ingresar
                </button>
                <button className="md:hidden" onClick={() => handleLogin()}>
                  <FaUserAlt size={16} />
                </button>
                <button
                  className="hidden md:block btn"
                  onClick={() => handleRegister()}
                >
                  Registrarse
                </button>
                <button className="md:hidden" onClick={() => handleRegister()}>
                  <FaUserPlus size={20} />
                </button>
              </div>
            )}
          </div>

          <button
            className="hover:text-primary-200 lg:hidden ml-4"
            onClick={handleShowToggleMenu}
          >
            {!showMenu ? <FaBars size={20} /> : <FaTimes size={20} />}
          </button>
          <ul
            onClick={handleShowToggleMenu}
            className={`menuMobile ${
              showMenu ? ' translate-x-0 ' : 'translate-x-full'
            } lg:menuDesktop xl:-translate-x-36`}
          >
            {links.map((link) => {
              return (
                <li className="headerLink" key={link.label}>
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {currentUser.firstName === '' && <ModalLogin />}
    </>
  );
};
