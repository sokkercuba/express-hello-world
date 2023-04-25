import { useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link'

function AddonPrivacy() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Privacy Policy</h1>
      <p>Last updated: April 24, 2023</p>
      <p>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>

      <h2>Definitions</h2>
      <p>For the purposes of this Privacy Policy:</p>
      <ul>
        <li>
          <p>
            <strong>Cookies</strong> are small files that are placed on Your
            computer, mobile device or any other device by a website, containing
            the details of Your browsing history on that website among its many
            uses.
          </p>
        </li>
        <li>
          <p>
            <strong>Device</strong> means any device that can access the Service
            such as a computer, a cellphone or a digital tablet.
          </p>
        </li>
        <li>
          <p>
            <strong>Sokker Data</strong> is information such player, team,
            juniors, training, etc... data from your sokker account.
          </p>
        </li>
        <li>
          <p>
            <strong>Service</strong> refers to the Addon, accessible from{' '}
            <Link
              key="https://www.sokkercuba.com/addon"
              variant="body1"
              color="inherit"
              underline="hover"
              component="button"
              onClick={() => navigate('/addon')}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              https://www.sokkercuba.com/addon
            </Link>
          </p>
        </li>
        <li>
          <p>
            <strong>Service Provider</strong> It refers to sokker.org website
            API. It provides your sokker information.
          </p>
        </li>
        <li>
          <p>
            <strong>Website</strong> refers to https://sokker.org.
          </p>
        </li>
        <li>
          <p>
            <strong>You</strong> means the individual accessing or using the
            Service, or the company, or other legal entity on behalf of which
            such individual is accessing or using the Service, as applicable.
          </p>
        </li>
      </ul>
      <h1>Collecting and Using Your Personal Data</h1>
      <h2>Types of Data Collected</h2>
      <h3>Sokker Data</h3>
      <p>
        While using Our Service, We may ask You to grant Us with Your active
        logged-in sokker.org tab's permissions from Your Device that can be used
        to identify You and provide an easy way to extract Your Sokker Data,
        exposing it by letting You to copy it to the clipboard. This means we
        will use your sokker Cookies to made All requests to sokker.org API(none
        external requests are made) Service Provider, so all request handling
        security is made by them, ie: CORS.
      </p>

      <p>
        We do not collect any other information but the one specified as
        downloadable data on our Service.
      </p>
      <p>
        By using the Service, You agree to the collection and use of information
        in accordance with this Privacy Policy.
      </p>
      <h3>Tracking Technologies and Cookies</h3>

      <ul>
        <li>
          <p>
            <strong>Necessary / Essential Cookies</strong>
          </p>
          <p>Type: Session Cookies</p>
          <p>Administered by: Sokker.org</p>
          <p>
            Purpose: These Cookies are essential to provide the Service with
            access to Your Sokker Data available through the sokker.org tab
            opened in your device and to enable You to use some of its features.
            They help to authenticate You while requesting data to Sokker API.
            Without these Cookies, the services that You have asked for cannot
            be provided, and We only use these Cookies to provide You with those
            services.
          </p>
        </li>
      </ul>

      <p>
        The Service will take all steps reasonably necessary to ensure that Your
        data is treated securely and in accordance with this Privacy Policy and
        no transfer of Your Personal Data will take place including the security
        of Your data and other personal information.
      </p>

      <h2>Security of Your Personal Data</h2>
      <p>
        The security of Your Personal Data is important to Us, but remember that
        no method of transmission over the Internet, or method of electronic
        storage is 100% secure. While We strive to use commercially acceptable
        means to protect Your Personal Data, We cannot guarantee its absolute
        security.
      </p>

      <h1>Changes to this Privacy Policy</h1>
      <p>
        We may update Our Privacy Policy from time to time. We will notify You
        of any changes by posting the new Privacy Policy on this page.
      </p>
      <p>
        We will let You know via email and/or a prominent notice on Our Service,
        prior to the change becoming effective and update the &quot;Last
        updated&quot; date at the top of this Privacy Policy.
      </p>
      <p>
        You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page.
      </p>
      <h1>Contact Us</h1>
      <p>
        If you have any questions about this Privacy Policy, You can contact us:
      </p>
      <ul>
        <li>
          <p>By email: sokkercuba@gmail.com</p>
        </li>
        <li>
          <p>
            By visiting this page on our website:{' '}
            <a
              href="https://www.sokkercuba.com/contact"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://www.sokkercuba.com/contact
            </a>
          </p>
        </li>
      </ul>
    </>
  )
}

export default AddonPrivacy
