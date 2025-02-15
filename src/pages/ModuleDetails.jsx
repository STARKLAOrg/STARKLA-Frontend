import React from "react";
import { useLocation } from "react-router-dom";
import { BookOpen, FilePlus } from "lucide-react";
import Sidebar from "../components/layout/sidebar";
import certificationBanner from "../assets/certification_banner.png"; // Imagen predeterminada

const ModuleDetails = () => {
  const location = useLocation(); // Obtener datos pasados por el estado
  const { title = "Default Title", description = "Default Description", imageUrl } = location.state || {};

  const moduleDetails = {
    title: title, // Usa el título dinámico
    subtitle: description, // Usa la descripción dinámica
    chapters: [
      { title: "Chapter 1: Introduction to Software Architecture", description: "Lorem Ipsum dolor sit ammet ister ejec" },
      { title: "Chapter 2: Introduction to Software Architecture", description: "Lorem Ipsum dolor sit ammet ister ejec" },
      { title: "Chapter 3: Introduction to Software Architecture", description: "Lorem Ipsum dolor sit ammet ister ejec" },
      { title: "Chapter 4: Introduction to Software Architecture", description: "Lorem Ipsum dolor sit ammet ister ejec" },
    ],
  };

  return (
    <div className="flex w-screen min-h-screen bg-gray-100">

      {/* Main Content */}
      <main className="flex-1 bg-white p-6">
        {/* Banner */}
        <div
          className="w-[85%] h-40 mb-6 rounded-xl bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${imageUrl || certificationBanner})`, // Usa la imagen recibida o la predeterminada
          }}
        >
          <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center rounded-xl px-6 text-white">
            <h1 className="text-4xl font-bold">{moduleDetails.title}</h1>
            <p className="text-2xl">{moduleDetails.subtitle}</p>
          </div>
        </div>

        {/* Module Details */}
        <section className="w-[85%] bg-gray-50 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Unit 1: Introduction</h2>
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full">
              <FilePlus size={20} />
            </div>
          </div>
          <div className="space-y-4">
            {moduleDetails.chapters.map((chapter, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-50 bg-opacity-70 p-4 rounded-md"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full mr-4">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{chapter.title}</h3>
                  <p className="text-base text-gray-600">{chapter.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ModuleDetails;
