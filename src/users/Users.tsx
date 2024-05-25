import { Box, Button, Input, Stack } from '@mui/joy'

export function Users() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <form action="">
        <Stack spacing={1}>
          <Input placeholder="Type in here…" size="sm" />
          <Stack spacing={1} direction={'row'}>
            <Button size="sm">Save</Button>
            <Button disabled size="sm">
              Save
            </Button>
            <Button loading size="sm">
              Loading
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  )
}
