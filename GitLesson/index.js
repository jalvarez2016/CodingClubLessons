// Git: What is it?
// Git is a version control system. Anything you make with git can be reverted to the last functioning state should things go horribly wrong.
// Github is a site to store your code and manage versions, features and the overall project. 

// Git commands
// git status
//      This command checks the status of the current branch of your github repository you're on.
// git add .
//      This command gets all your changes since the previous commit and adds them to the staged changes
// git commit -m ''
//      Gets all staged changes and puts those changes in a commit
// git push
//      Adds the commits not pushed up into github (or another remote that you're using) into githubs commit history
// git stash
//      Stores all local changes since the last commit
// git stash apply
//      Pastes last stored changes
// git reset --soft HEAD~1
//      Removes last commit from your local computer. Will keep the changes on your computer though
// git reset --hard HEAD~1
//      Removes last commit from your local computer. Will not keep the changes


// What are branches
// Branches are the split up work. They will have all the same code at the point as it's parent at which that branch was made.
// Usually, we'll make branches for specific features and when we're done, we'll merge them back into the main branch (main/master)

// You can make as many branches as you want with the following command
// git checkout -b jalvarez/branchName
// You can switch which branch you're on with
// git checkout jalvarez/branchName

// You can go on github and make a pull request to compare your branches so that you can merge them.
// Pull requests are often called PR's and in the professional setting, they're reviewed by your coworkers. Once you have the sufficient amount of 
// approvals, then you can merge your chnages in.

// What is a merge conflict
// It is the most annoying thing you'll encounter in my experience. It is when someone else changed a file that you've changed on your branch. This
// creates a conflicting commit history. You'll usually have to manually tell it when and what to accept when resolving a merge conflict.

// The steps to get over a merge conflict are as follows
// git rebase branchName 
// Click on the source control tab in vs code and go through any merge conflict that show up, selecting the correct code as you go. Then click accept merge.
// Aftering going through all merge conflicts, run the command `git rebase --continue`
// If that opens vim, ctrl+S, then type :qa, then hit enter
// After that youn should have a some commits to pull and some to push.
// You should `git push -f` and you should be done.

// Add stuff to your last commit
// git add .
// git commit --amend --no-edit
// git push -f