import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Option,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch
} from '@mui/joy'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { useState } from 'react'
import { Add } from '@mui/icons-material'

function valueText(value: number) {
  return `${value}°C`
}

export function AddUser() {
  const [value, setValue] = useState<number[]>([20, 37])
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log('event', event)
    setValue(newValue as number[])
  }
  return (
    <Box width="500px">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your name..." />
        <FormHelperText>This is a helper text.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input placeholder="email@company.com" />
        <FormHelperText>This is a helper text.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Country</FormLabel>
        <Select placeholder="Select your country" onChange={() => console.log('clicked')}>
          <Option value="us">United States</Option>
          <Option value="au">Australia</Option>
          <Option value="uk">United Kingdom</Option>
          <Option value="ca">Canada</Option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>States</FormLabel>
        <Select
          placeholder="Select your states"
          multiple
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', gap: '0.25rem' }}>
              {selected.map((selectedOption) => (
                <Chip variant="soft" color="primary">
                  {selectedOption.label}
                </Chip>
              ))}
            </Box>
          )}
          sx={{ minWidth: '15rem' }}
          // slotProps={{
          //   listbox: { sx: { width: '100%' } }
          // }}
        >
          <Option value="al">Alabama</Option>
          <Option value="ar">Arizona</Option>
          <Option value="ms">Mississippi</Option>
          <Option value="nv">Nevada</Option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Language</FormLabel>
        <ButtonGroup aria-label="language">
          <Button>English</Button>
          <Button>Germany</Button>
          <Button>Spanish</Button>
        </ButtonGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup name="gender">
          <Radio value="male" label="Male" variant="outlined" />
          <Radio value="female" label="Female" variant="outlined" />
          <Radio value="other" label="Other" variant="outlined" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Skills</FormLabel>
        <Checkbox label="Engineering" />
        <Checkbox label="Management" />
        <Checkbox label="Designing" />
      </FormControl>

      <FormControl>
        <FormLabel>Registration date</FormLabel>
        <DesktopDatePicker defaultValue={dayjs('2024-05-27')} />
      </FormControl>

      <FormControl>
        <FormLabel>Salary range</FormLabel>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valueText}
          />
        </Box>
      </FormControl>

      <FormControl orientation="horizontal">
        <FormLabel>Are you a teacher</FormLabel>
        <Switch
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
      </FormControl>

      <FormControl>
        <Button startDecorator={<Add />}>Add new student</Button>
      </FormControl>
    </Box>
  )
}
