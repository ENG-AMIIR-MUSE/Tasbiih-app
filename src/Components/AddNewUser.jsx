import {
  Button,
  Label,
  Modal,
  Radio,
  TextInput,
  Select,
  Checkbox,
} from "flowbite-react";
import { useState } from "react";

export function AddNewUser({ openModal, setOpenModal, data, setData }) {
  console.log(data);
  const [formData, setFormData] = useState({
    username: "",
    birthDate: "",
    phone: "",
    address: "",
    userId: "",
    gender: "",
    skills: [],
  });

  const { username, birthDate, phone, address, userId, gender, skills } =
    formData;

  const onCloseModal = () => {
    setOpenModal(false);
    setFormData({
      username: "",
      birthDate: "",
      phone: "",
      address: "",
      userId: "",
      gender: "",
      skills: [],
    });
  };

  const handleChange = (e) => {
    if (e.target.id === "skills") {
      if (e.target.checked) {
        setFormData({
          ...formData,
          skills: [...skills, e.target.value],
        });
      } else {
        setFormData({
          ...formData,
          skills: skills.filter((skill) => skill !== e.target.value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, formData]);
  };
  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add New User
            </h3>
            <div className="flex items-center gap-5">
              <div>
                <Label htmlFor="userId" value="UserId" />
                <TextInput
                  id="userId"
                  placeholder="UserId"
                  value={userId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="username" value="Username" />
                <TextInput
                  id="username"
                  placeholder="Enter Username"
                  value={username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="birth_date" value="Birth Date" />
              <TextInput
                id="birthDate"
                type="date"
                placeholder="Enter Your Birth_date"
                value={birthDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" value="Phone" />
              <TextInput
                id="phone"
                type="number"
                placeholder="Enter Your Phone"
                value={phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="address" value="address" />
              <Select
                id="address"
                value={address}
                onChange={handleChange}
                required
              >
                <option value="0">Choose Your Address</option>
                <option value="yaqshid">yaqshid</option>
                <option value="HoolWadaag">Howlwadaag</option>
                <option value="Jamuuriyo">Jamuuriyo</option>
                <option value="seebiyaano">Seebiyaano</option>
              </Select>
            </div>
            <div>
              <Label value="gender" htmlFor="gender" />
              <div className="flex items-center gap-5">
                <Radio
                  id="gender"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={gender === "male"}
                />
                Male
                <Radio
                  id="gender"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={gender === "female"}
                />
                Female
              </div>
            </div>

            <div className="">
              <Label value="skills" htmlFor="skills">
                Skills:
              </Label>
              <div>
                <Checkbox
                  id="skills"
                  value="programming"
                  checked={skills.includes("programming")}
                  onChange={handleChange}
                />
                <Label className="ml-3" htmlFor="skills">
                  Programming
                </Label>
              </div>
              <div>
                <Checkbox
                  id="skills"
                  value="design"
                  checked={skills.includes("design")}
                  onChange={handleChange}
                />
                <Label className="ml-3" htmlFor="skills">
                  Design
                </Label>
              </div>
              <div>
                <Checkbox
                  id="skills"
                  value="marketing"
                  checked={skills.includes("marketing")}
                  onChange={handleChange}
                />
                <Label className="ml-3" htmlFor="skills">
                  Marketing
                </Label>
              </div>
            </div>

            <div className="w-full">
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
