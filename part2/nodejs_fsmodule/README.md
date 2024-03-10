# File Manipulation

There are **four** things regarding the `fs` module that we've explored here:

1. Reading files
1. Writing to files
1. Creating and deleting directories
1. Deleting files

## Important Takeaway
Codes in NodeJS are executed asynchronously, therefore multiple functions can be executed simultaneously. This method is useful for handling **small** files. Therefore, we would need to use a different method to handle **large** files. This will be further explained in the [`../streams`](../streams/README.md) section.