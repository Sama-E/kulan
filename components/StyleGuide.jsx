import Link from "next/link"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

const StyleGuide = () => {
  return (
    <>
    <div className="flex flex-col gap-y-4 p-24">
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia est delectus ipsa labore incidunt eveniet eos illum, quam ex voluptas alias a, aliquid, possimus nobis assumenda nihil. Saepe, optio?
      </p>
    </div>
    <div className="bg-black p-24 flex flex-col gap-y-4">
      <Link href='/'>Link</Link>
      <Button variant='default'>Button 1</Button>
      <Button variant='orange'>Button 2</Button>
      <Button variant='input'>Button 3</Button>
      <Button variant='orange' size='sm'>Sm-Button 3</Button>
      <div>
        <Label htmlFor='firstname'>First Name</Label>
        <Input type='firstname' id='firstname' />
      </div>
      <div>
        <Label htmlFor='lastname'>Last Name</Label>
        <Input type='lastname' id='lastname' />
      </div>
    </div>
    </>
  )
}

export default StyleGuide