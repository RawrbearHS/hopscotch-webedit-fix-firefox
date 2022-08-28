# Hopscotch Web Editor Fix for Firefox

This is a temporary workaround for those who would like to use the Hopscotch Web Editor for Firefox!

There's a glitch happening right now that only lets you drag in one block per session. This script fixes this issue.

*\* Note that on newer versions of the web editor, this fix will be implemented, so you should disable this when that happens soon.*

## Install

This fix uses the Tampermonkey addon to inject JavaScript into the web editor that adds an extra function to Firefox (called a polyfill).

**⚠️ NOTE: DO NOT install Tampermonkey extensions from anyone that you don't trust!**

1. Install [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) for Firefox.
2. Click on the addon and select "+ Create a new script".
3. Delete everything in the script file that shows up.
4. Copy and paste the contents of `editor-fix.js` into that file.
5. Save the file (Ctrl+S or Command+S).
6. Navigate to https://explore.gethopscotch.com and log into your account, then open one of your drafts.
7. Enjoy using Hopscotch in the web browser! ✨

Make sure to disable this script once the new editor fix is out!
