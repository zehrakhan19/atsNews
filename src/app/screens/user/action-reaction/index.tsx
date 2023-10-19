import {withHook} from '../../../../../libs/ats-components/src';
import ActionReactionView from './ActionReactionView';
import useActionReaction from './useActionReaction';

const ActionReaction = withHook(useActionReaction, ActionReactionView);

export default ActionReaction;
