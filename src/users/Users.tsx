import { useForm } from 'react-hook-form'
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy'

type FormSchema = {
  name: string;
  email: string;
}

export function Users() {
  const { register, formState: { errors } } = useForm<FormSchema>({ mode: 'all' })
  console.log(errors)

  return (
    <>
      {/*<input
        {...register('name', {
          required: { value: true, message: 'This field is required' },
          maxLength: { value: 5, message: 'Too many characters' }
        })}
        placeholder={'Enter your name'} />
      <p>{errors.name?.message}</p>

      <input
        {...register('email', {
          required: { value: true, message: 'This field is required' },
          maxLength: { value: 5, message: 'Too many characters' }
        })}
        placeholder={'myemail@mycompany.com'} />
      <p>{errors.email?.message}</p>*/}

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Stack spacing={1}>

          {/*Name input*/}
          <FormControl error={!!errors.name}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <FormLabel>Name</FormLabel>
              <Box sx={{ width: '500px' }}>
                <Input
                  {...register('name', {
                    required: { value: true, message: 'This field is required' },
                    maxLength: { value: 5, message: 'Too many characters' }
                  })}
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
              {...register('email', {
                required: { value: true, message: 'This field is required' },
                maxLength: { value: 5, message: 'Too many characters' }
              })}
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
