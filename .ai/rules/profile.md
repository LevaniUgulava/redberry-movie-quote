---
paths:
  - 'resources/js/pages/Profile/**'
---

# Profile

## Bind file into useForm data for avatar upload
Inline <Form> that only sets a preview blob does not send files: the selected File never reaches the request, so $request->hasFile() is false. In ProfileView (mobile) use useForm({avatar:null}) + setData('avatar', file) in the file onChange, then patch(). Don't rely on the native <Form>/FormData path for the avatar.
