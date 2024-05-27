import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Typography } from '@mui/joy'
import { useFieldArray, useForm } from 'react-hook-form'

type FormValues = {
  student: {
    name: string,
    age: number
  }[]
}

export function DynamicForm() {
  const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    // defaultValues: {
    //   student: [{ name: 'test 1', age: 10 }, { name: 'test 2', age: 21 }]
    // },
    mode: 'all'
  })

  const { fields, append, prepend, remove } = useFieldArray({
    name: 'student',
    control
  })
  // console.log(fields)
  //console.log('errors', errors)

  return (
    <Box>
      <Typography variant={'soft'}>Dynamic field</Typography>

      <form onSubmit={handleSubmit((data) => console.log('submit', data))}>
        {fields.map((field, index) => {
          return (
            <Box key={field.id} component={'section'} sx={{ mb: 1 }}>
              <Typography>{`student-${index + 1}`}</Typography>
              <FormControl error={!!errors.student?.[index]?.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  {...register(`student.${index}.name`, { required: { value: true, message: 'Name is required' } })}
                  placeholder="Enter your name" />
                {errors.student?.[index]?.name &&
                  <FormHelperText>{errors.student?.[index]?.name?.message ?? ''}</FormHelperText>}

              </FormControl>

              <FormControl error={!!errors.student?.[index]?.age}>
                <FormLabel>Age</FormLabel>
                <Input
                  {...register(`student.${index}.age`, {
                    min: { value: 18, message: 'Age should be at least 18' },
                    valueAsNumber: true
                  })}
                  placeholder="Enter your age" />
                {errors.student?.[index]?.age &&
                  <FormHelperText>{errors.student?.[index]?.age?.message ?? ''}</FormHelperText>}
              </FormControl>

              <Button onClick={() => {
                remove(index)
              }}>Remove Student</Button>

            </Box>
          )
        })}

        <Button onClick={() => {
          prepend({
            name: '',
            age: 0
          })
        }}>Add Student above</Button>

        <Button onClick={() => {
          append({
            name: '',
            age: 0
          })
        }}>Add Student below</Button>


        <Button type={'submit'}>Submit</Button>
      </form>
    </Box>
  )
}