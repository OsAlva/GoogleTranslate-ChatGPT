import { OpenAIApi , Configuration} from "openai"
import { SUPPORTED_LANGUAGES } from "../constants";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const configuration = new Configuration({apiKey});

