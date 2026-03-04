import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { TextComponentDataFragmentDoc, type TextComponentDataFragment } from "@/gql/graphql";

/**
 * Text
 * Enter text string
 */
export const TextComponentComponent : CmsComponent<TextComponentDataFragment> = ({ data, editProps }) => {
    const componentName = 'Text'
    const componentInfo = 'Enter text string'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <h1>{ data.Text }</h1>
    </CmsEditable>
}
TextComponentComponent.displayName = "Text (Component/TextComponent)"
TextComponentComponent.getDataFragment = () => ['TextComponentData', TextComponentDataFragmentDoc]

export default TextComponentComponent