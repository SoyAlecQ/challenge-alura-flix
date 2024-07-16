import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../api/api";
import {
  Container,
  Title,
  SubTitle,
  H3Container,
  TitleH3,
  Form,
  Containter2InpLbl,
  ContainerInpYLbl,
  Label,
  Input,
  Select,
  TextArea,
  BtnContainer,
  BtnSave,
  BtnClean,
} from "./NewVideoStyles";

const NewVideo = () => {
  const [video, setVideo] = useState({
    title: "",
    category: "",
    photo: "",
    link: "",
    description: "",
  });

  const [nextId, setNextId] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNextId = async () => {
      try {
        const response = await api.get("/videos");
        const videos = response.data;
        const maxId = videos.reduce(
          (max, video) => Math.max(max, parseInt(video.id, 10)),
          0
        );
        setNextId((maxId + 1).toString());
      } catch (error) {
        console.error("Error al traer videos:", error);
      }
    };

    fetchNextId();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
      const newVideo = { ...video, id: nextId };
      const response = await api.post("/videos", newVideo, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200 || response.status === 201) {
        console.log("Nuevo video agregado:", response.data);
        handleClear();
        navigate("/");
      } else {
        console.error("Error al agregar el nuevo video");
      }
    } catch (error) {
      console.error("Error:", error);
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
    <>
      <Header />
      <Container>
        <Title>NUEVO VIDEO</Title>
        <SubTitle>
          COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
        </SubTitle>
        <Form onSubmit={handleSubmit}>
          <H3Container>
            <TitleH3>Crear Tarjeta</TitleH3>
          </H3Container>
          <Containter2InpLbl>
            <ContainerInpYLbl>
              <Label>Título</Label>
              <Input
                className={errors.title ? "error" : ""}
                type="text"
                name="title"
                value={video.title}
                onChange={handleChange}
                placeholder={errors.title ? errors.title : "Ingrese el título"}
                aria-invalid={errors.title ? "true" : "false"}
              />
            </ContainerInpYLbl>
            <ContainerInpYLbl>
              <Label>Categoría</Label>
              <Select
                className={errors.category ? "error" : ""}
                name="category"
                value={video.category}
                onChange={handleChange}
                aria-invalid={errors.category ? "true" : "false"}
              >
                <option value="">
                  {errors.category
                    ? errors.category
                    : "Seleccione una categoría"}
                </option>
                <option value="FRONT END">Front End</option>
                <option value="BACK END">Back End</option>
                <option value="INNOVACIÓN Y GESTIÓN">
                  Innovación y Gestión
                </option>
              </Select>
            </ContainerInpYLbl>
          </Containter2InpLbl>
          <Containter2InpLbl>
            <ContainerInpYLbl>
              <Label>Imagen</Label>
              <Input
                className={errors.photo ? "error" : ""}
                type="text"
                name="photo"
                value={video.photo}
                onChange={handleChange}
                placeholder={
                  errors.photo ? errors.photo : "Ingrese el enlace de la imagen"
                }
                aria-invalid={errors.photo ? "true" : "false"}
              />
            </ContainerInpYLbl>
            <ContainerInpYLbl>
              <Label>Video</Label>
              <Input
                className={errors.link ? "error" : ""}
                type="text"
                name="link"
                value={video.link}
                onChange={handleChange}
                placeholder={
                  errors.link ? errors.link : "Ingrese el enlace del video"
                }
                aria-invalid={errors.link ? "true" : "false"}
              />
            </ContainerInpYLbl>
          </Containter2InpLbl>
          <Label>Descripción</Label>
          <TextArea
            className={errors.description ? "error" : ""}
            name="description"
            value={video.description}
            onChange={handleChange}
            placeholder={
              errors.description
                ? errors.description
                : "¿De qué se trata este video?"
            }
            aria-invalid={errors.description ? "true" : "false"}
          />
          <BtnContainer>
            <BtnSave type="submit">GUARDAR</BtnSave>
            <BtnClean type="button" onClick={handleClear}>
              LIMPIAR
            </BtnClean>
          </BtnContainer>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default NewVideo;
