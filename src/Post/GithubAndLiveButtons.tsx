import React from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import DevicesIcon from '@material-ui/icons/Devices'

const useStyles = {
  root: {
    '&:not(:first-child)': {
      marginLeft: 8
    }
  },
  icon: {}
}

interface IProps extends WithStyles<typeof useStyles> {
  codeLink: string
  liveLink: string
}

function GithubAndLiveButtonsWithStyles({ codeLink, liveLink, classes }: IProps) {
  return (
    <div>
      <Button
        variant='contained'
        color='inherit'
        size='medium'
        component='a'
        href={codeLink}
        target='_blank'
        classes={{ root: classes.root }}
        style={{ backgroundColor: '#24292e', color: 'white' }}
        startIcon={<GitHubIcon color='inherit' classes={{ root: classes.icon }} />}
      >
        Kod
      </Button>

      <Button
        variant='contained'
        color='primary'
        size='medium'
        component='a'
        href={liveLink}
        classes={{ root: classes.root }}
        startIcon={<DevicesIcon classes={{ root: classes.icon }} />}
      >
        Live
      </Button>
    </div>
  )
}

export const GithubAndLiveButtons = withStyles(useStyles)(GithubAndLiveButtonsWithStyles)
