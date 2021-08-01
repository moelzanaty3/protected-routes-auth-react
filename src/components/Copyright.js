import { Link, Typography } from '@material-ui/core'

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/mohammedelzanaty129/"
      >
        Mohammed Elzanaty
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
