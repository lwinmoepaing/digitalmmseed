import { Link } from '../i18n'

const Navbar = () => {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'User', url: '/user' },
  ]
  return (
    <ul>
      {links.map((link) => (
        <li key={link.url}>
          <Link href={link.url}>
            <a href="#!">{t(link.name)}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navbar
