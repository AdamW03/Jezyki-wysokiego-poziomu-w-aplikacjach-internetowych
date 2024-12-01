import '../style/Lab8AppComponent.module.css';
import NiePrawidlowyKomponent from "./NiePrawidlowyKomponent";
import PrawidlowyKomponent from "./PrawidlowyKomponent";
import HandleClickComponent from "./HandleClickComponent";
import HandleMouseOverComponent from "./HandleMouseOverComponent";
import ShowImageComponent from "./ShowImageComponent";
import LoadDataFromJsonComponent from "./LoadDataFromJsonComponent";
import UploadFileComponent from "./UploadFileComponent";
import ChangeStyleComponent from "./ChangeStyleComponent";

function Lab8AppComponent() {
  return (
    <div className="App">
      <h1>Zadanie nr 1</h1>
      <NiePrawidlowyKomponent />
      <PrawidlowyKomponent />

      <h1>Zadanie nr 2</h1>
      <HandleClickComponent />
      <HandleMouseOverComponent />
      <ShowImageComponent />
      <LoadDataFromJsonComponent />
      <UploadFileComponent />
      <ChangeStyleComponent />
    </div>
  );
}

export default Lab8AppComponent;
