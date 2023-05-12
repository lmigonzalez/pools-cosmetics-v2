import z from "zod"

const CategorySchema = z.object({
  "$__": z.object({
    activePaths: z.object({
      paths: z.object({
        "picture.fileSize": z.literal("init"),
        "picture.fileName": z.literal("init"),
        letter: z.literal("init"),
        name: z.literal("init"),
        date: z.literal("init"),
        _id: z.literal("init"),
        __v: z.literal("init"),
      }),
      states: z.object({
        require: z.unknown(),
        default: z.unknown(),
        init: z.object({
          _id: z.boolean(),
          name: z.boolean(),
          letter: z.boolean(),
          "picture.fileName": z.boolean(),
          "picture.fileSize": z.boolean(),
          date: z.boolean(),
          __v: z.boolean(),
        }),
      }),
    }),
    skipId: z.boolean(),
    getters: z.object({
      picture: z.object({
        fileName: z.string(),
        fileSize: z.number(),
      }),
    }),
    nestedPath: z.string(),
  }),
  "$isNew": z.boolean(),
  "_doc": z.object({
    picture: z.object({
      fileName: z.string(),
      fileSize: z.number(),
    }),
    _id: z.string(),
    name: z.string(),
    letter: z.string(),
    date: z.string(),
    __v: z.number(),
  }),
  imageUrl: z.string(),
});

export const responseCategorySchema = z.array(CategorySchema);


const pictureSchema = z.object({
  fileName: z.string(),
  fileSize: z.number(),
  date: z.string(),
  _id: z.string(),
});

// Define the schema for the Product object
const productSchema = z.object({
  _id: z.string(),
  name: z.string(),
  categoryId: z.string(),
  categoryLetter: z.string(),
  categoryName: z.string(),
  price: z.number(),
  oldPrice: z.number(),
  description: z.string(),
  isActive: z.boolean(),
  pictures: z.array(pictureSchema),
  date: z.string(),
  __v: z.number(),
});

// Define the schema for the response object
const responseSchema = z.object({
  $__: z.unknown(),
  $isNew: z.boolean(),
  _doc: productSchema,
  pictures: z.array(
    z.object({
      __parentArray: z.array(pictureSchema),
      __index: z.number(),
      $__parent: productSchema,
      $__: z.unknown(),
      _doc: pictureSchema,
      $isNew: z.boolean(),
      fileUrl: z.string(),
    })
  ),
});

export const responseProductSchema = z.array(responseSchema);