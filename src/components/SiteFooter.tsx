import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import './SiteFooter.scss'

const footerText = [
  'Some web team credit',
  'test paragraph',
  '',
  'some fan site disclaimer',
  ''
]

export default function SiteFooter (): JSX.Element {
  const location = useLocation()
  const [firstName, setFirstName] = useState(window.location.pathname)

  useEffect(() => {
    setFirstName(window.location.pathname)
  }, [location])

  const firstNameLower = firstName.toLowerCase().split('/')[1]

  return (
    <>
      <footer className={`footer ${firstNameLower}-footer-border`}>
        {footerText.map((paragraph, index) =>
          // OK to use index as key as long as list is static
          <p key={index}>{paragraph}&nbsp;</p>
        )}
      </footer>

    </>
  )
}
