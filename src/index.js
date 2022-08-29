/**
 * Todo type.
 * @typedef {Object} Todo
 * @property {string} id - Todo id
 * @property {string} content - Todo content
 * @property {boolean} isComplete - Todo is complete
 * @property {string} category - Todo category
 * @property {string[]} [tags] - Todo tags
 */

/**
 * Insert a Todo.
 * @param {string} content
 */
function createTodo(content) {}

/**
 * Select all Todos, optionally filtered Todo by id.
 * @param {string} [id]
 */
function readTodo(id) {}

/**
 * Update Todo.
 * @param {Todo} id
 */
function updateTodo(Todo) {}

/**
 * <pre>
 * If all parameters are undefined, delete all Todos.
 * If id is provided and tag is undefined, delete that Todo.
 * If id is provided and tag is empty string like '', delete all tags of that Todo.
 * If id and tag are provided, delete that Todo's tag.
 * </pre>
 * @param {string} [id]
 * @param {string} [tag]
 */
function deleteTodo(id, tag) {}
