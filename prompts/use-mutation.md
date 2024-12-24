## Usage with server-action

`Server-action` is method that finish with "action" suffix.

You can use it like this :

\`\`\`tsx
import { resolveActionResult } from '~/lib/actions/actions.utils';

const mutationWithName = useMutation({
mutationFn: async ({ someParams }: { someParams: string }) => {
// You always need to call the action INSIDE the resolveActionResult WITHOUT await
return resolveActionResult(someAction({ someParams }));
},
// Error is equal to "serverError" of someAction
onError: (error) => {
toast.error(error.message);
},
// Data is equal to "data" of someAction, data is required
onSuccess: (data) => {
toast.success('Invoice marked as paid');
// Optionally refresh data or update state
},
});
\`\`\`

## API

// Copy paste all documentation from use-mutation.ts
