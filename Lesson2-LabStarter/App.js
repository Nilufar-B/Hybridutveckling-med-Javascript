import LabExplanation from "./lab_parts/LabExplanation";
import WhyNeedState from "./lab_parts/WhyNeedState";
import UsingStateToSetTextColor from "./lab_parts/UsingStateToSetTextColor";
import UsingStateToTrackItemCount from "./lab_parts/UsingStateToTrackItemCount";
import WorkingWithDictionaries from "./lab_parts/WorkingWithDictionaries";
import CreatingCustomComponents from "./lab_parts/CreatingCustomComponents";

/* LESSON 2 LAB 
  Please start by running the project on a device or simulator. There will be explanations for what to do for each part. 
  For reference, here are the names of the functions for each part of the lab and it's associated labPart number:
  0 - LabExplanation 
  1 - WhyNeedState 
  2 - UsingStateToSetTextColor 
  3 - UsingStateToTrackItemCount
  4 - WorkingWithDictionaries
  5 - CreatingCustomComponents 
  You can find them in the lab_parts folder with the same filenames. 
*/

export default function App() {
  let labPart = 5; /* SET THE VALUE OF THIS VARIABLE BASED ON WHICH PART OF THE LAB IS BEING DONE */

  switch (labPart) {
    case 0:
      return LabExplanation();
    case 1:
      return WhyNeedState();
    case 2:
      return UsingStateToSetTextColor();
    case 3:
      return UsingStateToTrackItemCount();
    case 4:
      return WorkingWithDictionaries();
    case 5:
      return CreatingCustomComponents();
    default:
      return LabExplanation();
  }
}
