import { useForm } from 'react-hook-form'
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const patterns = {
  email: /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string()
    .min(1, { message: 'Email is required' })
    .refine((x) => patterns.email.test(x), { message: 'Email is not valid' })
})

type FormSchema = z.infer<typeof schema>

export function Users() {
  const { register, formState: { errors } } = useForm<FormSchema>({
    mode: 'all',
    resolver: zodResolver(schema)
  })

  console.log('errors', errors)

  return (
    <>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Stack spacing={1}>

          {/*Name input*/}
          <FormControl error={!!errors.name}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <FormLabel>Name</FormLabel>
              <Box sx={{ width: '500px' }}>
                <Input
                  {...register('name')}
                  placeholder="Type your name here…"
                  size="sm"
                />
                {errors.name?.message && <FormHelperText>{errors.name.message}</FormHelperText>}
              </Box>
            </Box>
          </FormControl>

          {/*Email input*/}
          <FormControl error={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              {...register('email')}
              placeholder="some@some.com"
              size="sm"
            />
            <FormHelperText>
              {errors.email?.message}
            </FormHelperText>
          </FormControl>

          <Stack spacing={1} direction={'row'}>
            <Button type={'submit'} size="sm">Save</Button>
            {/*<Button disabled size="sm">Save</Button>*/}
            {/*<Button loading size="sm">Loading</Button>*/}
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
