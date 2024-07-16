import { useState } from "react";
import api from "../../api/api";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  TituloContainer,
  TituloStyled,
  CloseButton,
  Form,
  Label,
  Input,
  Select,
  TextArea,
  BtnContainer,
  BtnSave,
  BtnClean,
  ErrorText,
} from "./ModalStyles";

const Modal = ({ show, onClose, onSave, videoData }) => {
  const [video, setVideo] = useState(videoData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({
      ...video,
      [name]: value,
    });
  };

  const validateFields = () => {
    const newErrors = {};
    if (!video.title) newErrors.title = "El título es obligatorio";
    if (!video.category) newErrors.category = "La categoría es obligatoria";
    if (!video.photo) newErrors.photo = "El enlace de la imagen es obligatorio";
    else if (!/\.(jpg|jpeg|png|gif)$/i.test(video.photo))
      newErrors.photo =
        "El enlace de la imagen debe tener un formato válido (jpg, jpeg, png, gif)";
    if (!video.link) newErrors.link = "El enlace del video es obligatorio";
    else if (!/^https?:\/\/.+\..+/.test(video.link))
      newErrors.link = "El enlace del video debe ser un enlace válido";
    if (!video.description)
      newErrors.description = "La descripción es obligatoria";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    try {
      const response = await api.put(`/videos/${video.id}`, video);
      if (response.status === 200) {
        onSave(response.data);
        onClose();
      } else {
        console.error("Error al guardar el video");
      }
    } catch (error) {
      console.error("Error al guardar el video:", error);
    }
  };

  const handleClear = () => {
    setVideo({
      title: "",
      category: "",
      photo: "",
      link: "",
      description: "",
    });
    setErrors({});
  };

  return (
    <ModalContainer className={`${show ? "show" : ""}`}>
      <ModalContent>
        <ModalHeader>
          <CloseButton
            src="/img/cross.png"
            alt="Cerrar Modal"
            onClick={onClose}
          />
        </ModalHeader>
        <TituloContainer>
          <TituloStyled>EDITAR CARD:</TituloStyled>
        </TituloContainer>
        <Form onSubmit={handleSubmit}>
          <Label>Título</Label>
          <Input
            className={`${errors.title ? "error" : ""}`}
            type="text"
            name="title"
            value={video.title}
            onChange={handleChange}
            placeholder={errors.title ? errors.title : "Ingrese el título"}
          />
          {errors.title && <ErrorText>{errors.title}</ErrorText>}
          <Label>Categoría</Label>
          <Select
            className={`${errors.category ? "error" : ""}`}
            name="category"
            value={video.category}
            onChange={handleChange}
          >
            <option value="">
              {errors.category ? errors.category : "Seleccione una categoría"}
            </option>
            <option value="FRONT END">Front End</option>
            <option value="BACK END">Back End</option>
            <option value="INNOVACIÓN Y GESTIÓN">Innovación y Gestión</option>
          </Select>
          {errors.category && <ErrorText>{errors.category}</ErrorText>}
          <Label>Imagen</Label>
          <Input
            className={`${errors.photo ? "error" : ""}`}
            type="text"
            name="photo"
            value={video.photo}
            onChange={handleChange}
            placeholder={
              errors.photo ? errors.photo : "Ingrese el enlace de la imagen"
            }
          />
          {errors.photo && <ErrorText>{errors.photo}</ErrorText>}
          <Label>Video</Label>
          <Input
            className={`${errors.link ? "error" : ""}`}
            type="text"
            name="link"
            value={video.link}
            onChange={handleChange}
            placeholder={
              errors.link ? errors.link : "Ingrese el enlace del video"
            }
          />
          {errors.link && <ErrorText>{errors.link}</ErrorText>}
          <Label>Descripción</Label>
          <TextArea
            className={`${errors.description ? "error" : ""}`}
            type="text"
            name="description"
            value={video.description}
            onChange={handleChange}
            placeholder={
              errors.description ? errors.description : "Descripción"
            }
          />
          {errors.description && <ErrorText>{errors.description}</ErrorText>}
          <BtnContainer>
            <BtnSave type="submit">Guardar</BtnSave>
            <BtnClean type="button" onClick={handleClear}>
              Limpiar
            </BtnClean>
          </BtnContainer>
        </Form>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
